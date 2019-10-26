function autenticar()
{
    
    var usuario = $("#user").val();
    var senha = $("#password").val(); 
    console.log(usuario + ', ' + senha);
    
    if(usuario != 'admin@email.com.br')
    {
        $('#user').addClass('is-invalid');
    }
    if(senha != '123logar')
    {
        $('#password').addClass('is-invalid');
    }
    
    if(usuario == 'admin@email.com.br' && senha == '123logar')
    {
        
        toastr.success('Usuário encontrado');
        setTimeout(function(){location="../pages/dashboard.html"} , 2000);
       
       
    }
    
}


    


