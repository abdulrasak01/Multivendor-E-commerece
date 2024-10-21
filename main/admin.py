from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Vendor)
# admin.site.register(models.Product)
admin.site.register(models.productCategory)
admin.site.register(models.Customer)
admin.site.register(models.Order)
admin.site.register(models.OrderItems)
admin.site.register(models.CustomerAddress)
admin.site.register(models.ProductRating)

#Product image

admin.site.register(models.ProductImage)

class ProductImageInline(admin.StackedInline):
    model = models.ProductImage
    
class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    inlines = [
         ProductImageInline,
    ]
    
admin.site.register(models.Product,ProductAdmin)
