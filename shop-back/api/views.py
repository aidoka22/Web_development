from django.http.response import HttpResponse, JsonResponse
from datetime import datetime,timedelta

def hello(request):
    return HttpResponse('<h1>hello message</h1>')


def hours_ahead(request, hours):
    current_time=datetime.now()+timedelta(hours=int(hours))
    return HttpResponse(f'<h1>Hours ahead: {current_time}</h1>')

products = [
    {
        'id': i,
        'name': f'Product {i}',
        'price': i * 1000,
        'description':f'This is my product{i}',
        'count':i,
        'is_active': False ,
    } for i in range(1, 11)
]
categories=[
    {
        'id':i,
        'name':f'Categorie{i}',

    } for i in range(1,11)
]

def products_list(request):
    return JsonResponse(products, safe=False)


def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'message': 'Product with selected ID not found'})
def categories_list(request):
    return JsonResponse(categories, safe=False)


def categorie_detail(request, categorie_id):
    for categorie in categories:
        if categorie['id'] == categorie_id:
            return JsonResponse(categorie)
    return JsonResponse({'message': 'categorie with selected ID not found'})