  
from django.urls import path, re_path

from api.views import hello, hours_ahead, products_list, product_detail,categories_list,categorie_detail

urlpatterns = [
    path('hi/', hello),
    re_path(r'time/plus/(\d{1,2})/', hours_ahead),
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
    path('categories/', categories_list),
    path('categories/<int:categorie_id>/', categorie_detail),
]