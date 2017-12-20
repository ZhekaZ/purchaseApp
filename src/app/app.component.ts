import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<child-comp [(userName)]="name" [(userSurName)]="surName"></child-comp>
                <div>Выбранное имя: {{name}}</div>
                <div>Выбранное фамилия: {{surName}}</div>
              `
})
export class AppComponent {
    name: string = "Tom";
    surName: string = 'Johnson';
}
