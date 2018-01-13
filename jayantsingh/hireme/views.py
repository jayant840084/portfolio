from django.shortcuts import render
from django.http import HttpResponseRedirect

from .forms import HireMeForm
from .notify import notify


def index(request):
    if(request.method == 'POST'):
        form = HireMeForm(request.POST)
        if form.is_valid():
            notify(form.cleaned_data)
            form = HireMeForm()
            return render(request, 'hireme/home.html', {
                'title': 'Hire Me | Jayant Singh',
                'form': form,
                'success': True
            })
    else:
        form = HireMeForm()
    
    return render(request, 'hireme/home.html', {
        'title': 'Hire Me | Jayant Singh',
        'form': form
    })

def thankyou(request):
    return render(request, 'hireme/thankyou.html', {
        'title': 'Thankyou | Jayant Singh',
        'message': 'Thankyou..'
    })