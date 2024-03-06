import { Component } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Adicione esta linha
})
export class AppComponent {
  title = 'your-app-name';
  uploadStatus: string = ''; // Variável para armazenar o status do upload

  constructor(private uploadService: UploadService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadService.uploadFile(file).subscribe(
      (response: any) => {
        // Se o upload for bem-sucedido, definimos o status como "Enviado com sucesso"
        this.uploadStatus = 'Arquivo enviado com sucesso!';
      },
      (error: any) => {
        // Se ocorrer um erro no upload, definimos o status como "Falha ao enviar"
        this.uploadStatus = 'Falha ao enviar o arquivo.';
      }
    );
  }

  // Função uploadFile() foi adicionada aqui
  uploadFile() {

    console.log('Upload do arquivo sendo iniciado...');
  }
}
