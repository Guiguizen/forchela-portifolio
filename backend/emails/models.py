from distutils.command.upload import upload
from django.db import models
from datetime import datetime
import smtplib
import email.message

# Create your models here.

class Emails(models.Model):
    nome = models.CharField(max_length=255, default='(ERR Sem nome)')
    email_origem = models.CharField(max_length=255, default='(ERR Sem email de origem)')
    texto = models.TextField(default='(ERR Sem texto)')
    data_criacao = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        corpo_email = """
        Este email foi enviado de {0}. Segue a mensagem:
        {1}.
        Entre em contato com {0} por meio do email {2} 
        """.format(self.nome, self.texto, self.email_origem)
        
        msg = email.message.Message()
        msg['Subject'] = "Orçamento"
        msg['From'] = 'Forchela.Atendimento@gmail.com'
        msg['To'] = 'Forchela.Atendimento@gmail.com'
        password = 'baeiskhgwiatjxez' 
        msg.set_payload(corpo_email)
        s = smtplib.SMTP('smtp.gmail.com: 587')
        s.starttls()
        # Login Credentials for sending the mail
        s.login(msg['From'], password)
        s.sendmail(msg['From'], [msg['To']], msg.as_string().encode('utf-8'))
