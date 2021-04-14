from django.http.response import JsonResponse

from api.models import Vacancy


def vacancy_list(request):
    # SELECT * FROM core_vacancy;
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    # SELECT * FROM core_vacancy WHERE id = <vacancy_id>;
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(vacancy.to_json())
    
def top_ten(request):
    vacancies = Vacancy.objects.order_by(-Vacancy.salary)
    categories_json = []
    for i in range(1,10):
        categories_json.append(vacancies.objects.get(id=i))
    return JsonResponse(categories_json, safe=False)