'use client';

import { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Download, Upload, Settings2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function QRCodeGenerator() {
    const [text, setText] = useState('');
    const [size, setSize] = useState(256);
    const [logo, setLogo] = useState<string | null>(null);
    const [showLogo, setShowLogo] = useState(false);
    const [level, setLevel] = useState<'L' | 'M' | 'Q' | 'H'>('H');
    const [bgColor, setBgColor] = useState('#FFFFFF');
    const [fgColor, setFgColor] = useState('#000000');
    const [marginSize, setMarginSize] = useState(4);
    const [title, setTitle] = useState('');
    const [minVersion, setMinVersion] = useState(1);
    const [boostLevel, setBoostLevel] = useState(true);
    const [logoOpacity, setLogoOpacity] = useState(1);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setLogo(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const downloadQRCode = () => {
        const canvas = document.createElement('canvas');
        const svg = document.querySelector('svg');
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const img = new Image();
        img.onload = () => {
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            ctx.drawImage(img, 0, 0);

            if (showLogo && logo) {
                const logoImg = new Image();
                logoImg.src = logo;
                logoImg.onload = () => {
                    const logoSize = size * 0.2;
                    const logoX = (size - logoSize) / 2;
                    const logoY = (size - logoSize) / 2;
                    ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
                    
                    const pngFile = canvas.toDataURL('image/png');
                    const downloadLink = document.createElement('a');
                    downloadLink.download = 'qrcode.png';
                    downloadLink.href = pngFile;
                    downloadLink.click();
                };
            } else {
                const pngFile = canvas.toDataURL('image/png');
                const downloadLink = document.createElement('a');
                downloadLink.download = 'qrcode.png';
                downloadLink.href = pngFile;
                downloadLink.click();
            }
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Card className="shadow-xl border-0">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold text-center text-rose-500">
                            QR Code Generator
                        </CardTitle>
                        <CardDescription className="text-center text-gray-500">
                            Create customizable QR codes quickly and easily
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="text" className="text-sm font-medium">
                                            QR Code Content
                                        </Label>
                                        <Input
                                            id="text"
                                            type="text"
                                            placeholder="Enter URL or text"
                                            value={text}
                                            onChange={(e) => setText(e.target.value)}
                                            className="h-12"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="title" className="text-sm font-medium">
                                            Title
                                        </Label>
                                        <Input
                                            id="title"
                                            type="text"
                                            placeholder="QR code title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="size" className="text-sm font-medium">
                                            Size (pixels)
                                        </Label>
                                        <Input
                                            id="size"
                                            type="number"
                                            min="100"
                                            max="1000"
                                            value={size}
                                            onChange={(e) => setSize(Number(e.target.value))}
                                            className="h-12"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="level" className="text-sm font-medium">
                                            Error Correction Level
                                        </Label>
                                        <Select value={level} onValueChange={(value: 'L' | 'M' | 'Q' | 'H') => setLevel(value)}>
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="Select error correction level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="L">L - Low (7%)</SelectItem>
                                                <SelectItem value="M">M - Medium (15%)</SelectItem>
                                                <SelectItem value="Q">Q - High (25%)</SelectItem>
                                                <SelectItem value="H">H - Highest (30%)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="bgColor" className="text-sm font-medium">
                                            Background Color
                                        </Label>
                                        <div className="flex gap-2">
                                            <Input
                                                id="bgColor"
                                                type="color"
                                                value={bgColor}
                                                onChange={(e) => setBgColor(e.target.value)}
                                                className="h-12 w-12 p-1"
                                            />
                                            <Input
                                                type="text"
                                                value={bgColor}
                                                onChange={(e) => setBgColor(e.target.value)}
                                                className="h-12"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="fgColor" className="text-sm font-medium">
                                            Foreground Color
                                        </Label>
                                        <div className="flex gap-2">
                                            <Input
                                                id="fgColor"
                                                type="color"
                                                value={fgColor}
                                                onChange={(e) => setFgColor(e.target.value)}
                                                className="h-12 w-12 p-1"
                                            />
                                            <Input
                                                type="text"
                                                value={fgColor}
                                                onChange={(e) => setFgColor(e.target.value)}
                                                className="h-12"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="marginSize" className="text-sm font-medium">
                                            Margin Size (modules)
                                        </Label>
                                        <Input
                                            id="marginSize"
                                            type="number"
                                            min="0"
                                            max="10"
                                            value={marginSize}
                                            onChange={(e) => setMarginSize(Number(e.target.value))}
                                            className="h-12"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="minVersion" className="text-sm font-medium">
                                            Minimum Version (1-40)
                                        </Label>
                                        <Input
                                            id="minVersion"
                                            type="number"
                                            min="1"
                                            max="40"
                                            value={minVersion}
                                            onChange={(e) => setMinVersion(Number(e.target.value))}
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                                    <Switch
                                        id="boost-level"
                                        checked={boostLevel}
                                        onCheckedChange={setBoostLevel}
                                    />
                                    <Label htmlFor="boost-level" className="flex items-center gap-2">
                                        <Settings2 className="w-4 h-4" />
                                        Auto Boost Error Correction Level
                                    </Label>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                                        <Switch
                                            id="logo-toggle"
                                            checked={showLogo}
                                            onCheckedChange={setShowLogo}
                                        />
                                        <Label htmlFor="logo-toggle" className="flex items-center gap-2">
                                            <Upload className="w-4 h-4" />
                                            Add Logo
                                        </Label>
                                    </div>

                                    {showLogo && (
                                        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleLogoUpload}
                                                ref={fileInputRef}
                                                className="cursor-pointer"
                                            />
                                            {logo && (
                                                <>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">Logo preview:</p>
                                                        <img src={logo} alt="Logo preview" className="w-16 h-16 object-contain mt-1 rounded-lg" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="logoOpacity" className="text-sm font-medium">
                                                            Logo Opacity
                                                        </Label>
                                                        <Input
                                                            id="logoOpacity"
                                                            type="range"
                                                            min="0"
                                                            max="1"
                                                            step="0.1"
                                                            value={logoOpacity}
                                                            onChange={(e) => setLogoOpacity(Number(e.target.value))}
                                                            className="h-12"
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center space-y-4">
                                <div className="bg-white p-6 rounded-xl shadow-inner">
                                    {text ? (
                                        <QRCodeSVG
                                            value={text}
                                            size={size}
                                            level={level}
                                            bgColor={bgColor}
                                            fgColor={fgColor}
                                            marginSize={marginSize}
                                            title={title}
                                            minVersion={minVersion}
                                            boostLevel={boostLevel}
                                            imageSettings={showLogo && logo ? {
                                                src: logo,
                                                height: size * 0.2,
                                                width: size * 0.2,
                                                excavate: true,
                                                opacity: logoOpacity
                                            } : undefined}
                                        />
                                    ) : (
                                        <div className="w-[256px] h-[256px] flex items-center justify-center text-gray-400">
                                            QR code preview will appear here
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Button
                            className="w-full h-12 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                            onClick={downloadQRCode}
                            disabled={!text}
                        >
                            <Download className="w-5 h-5" />
                            Download QR Code
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
} 