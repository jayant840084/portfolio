from django.shortcuts import render


def index(request):
    return render(request, 'hireme/home.html', {
        'title': 'Hire Me | Jayant Singh'
    })

