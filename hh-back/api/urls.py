from django.urls import path

from api.views import vacancy_list, vacancy_detail,top_ten

urlpatterns = [
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('top_ten/', top_ten)
]