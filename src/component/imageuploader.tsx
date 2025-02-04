'use client'
import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import React, { useState } from "react";

const FlowerForm = () => {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "Rose",
    color: "",
    season: "Spring",
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile)); // Preview image
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      alert("Please upload an image!");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("type", formData.type);
    data.append("color", formData.color);
    data.append("season", formData.season);

    console.log("Form Data Submitted", Object.fromEntries(data.entries()));
    alert("Flower details submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Flower Details Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 space-y-9">
        {/* Title */}

        <div className="flex flex-col">
          <Label htmlFor="title">Flower Name</Label>
          <Input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Flower Name"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Short description about the flower..."
            required
          />
        </div>

        {/* Type of Flower */}
        <div className="flex flex-col">
          <Label htmlFor="type">Type of Flower</Label>
          <Select
            name="type"
            value={formData.type}
            onValueChange={(value) => setFormData({ ...formData, type: value })}
          >
            <SelectTrigger>
              <span>{formData.type}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Rose">Rose</SelectItem>
              <SelectItem value="Lily">Lily</SelectItem>
              <SelectItem value="Tulip">Tulip</SelectItem>
              <SelectItem value="Daisy">Daisy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Color */}
        <div className="flex flex-col">
          <Label htmlFor="color">Flower Color</Label>
          <Input
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Flower Color"
            required
          />
        </div>

        {/* Season */}
        <div className="flex flex-col">
          <Label htmlFor="season">Season</Label>
          <Select
            name="season"
            value={formData.season}
            onValueChange={(value) => setFormData({ ...formData, season: value })}
          >
            <SelectTrigger>
              <span>{formData.season}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Spring">Spring</SelectItem>
              <SelectItem value="Summer">Summer</SelectItem>
              <SelectItem value="Autumn">Autumn</SelectItem>
              <SelectItem value="Winter">Winter</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Image Upload */}
        <label className="cursor-pointer flex flex-col items-center gap-2 bg-gray-100 p-3 rounded-md hover:bg-gray-200">
          <span className="text-sm text-gray-700">Choose an Image</span>
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </label>

        {image && (
          <img src={image} alt="Preview" className="w-24 h-24 object-cover rounded-md border" />
        )}

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-green-500 text-white rounded-md text-sm hover:bg-green-600">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FlowerForm;
