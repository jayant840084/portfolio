from django.shortcuts import render


def index(request):
    return render(request, 'mockSiteHexagon/index.html', {
        'title': 'Hexagon'
    })


