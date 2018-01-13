from django import forms


class HireMeForm(forms.Form):
    name = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(
            attrs={
                'placeholder':'Name'
            }
        )
    )
    email = forms.EmailField(
        max_length=100,
        required=True,
        widget=forms.TextInput(
            attrs={
                'placeholder':'Email'
            }
        )
    )
    description = forms.CharField(
        max_length=10000,
        required=True,
        widget=forms.Textarea(
            attrs={
                'placeholder':'Give a description of the work'
            }
        )
    )