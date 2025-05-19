# PowerShell script to download product images
$imageUrls = @{
    "smartphone.jpg" = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop"
    "rice.jpg" = "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop"
    "dress.jpg" = "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=600&fit=crop"
    "tv.jpg" = "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop"
    "washing-machine.jpg" = "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&h=600&fit=crop"
    "honey.jpg" = "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=600&fit=crop"
    "watch.jpg" = "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=600&fit=crop"
    "fridge.jpg" = "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&h=600&fit=crop"
    "laptop.jpg" = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop"
    "tea.jpg" = "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&h=600&fit=crop"
}

foreach ($image in $imageUrls.GetEnumerator()) {
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $image.Key
    Write-Host "Downloaded $($image.Key)"
} 