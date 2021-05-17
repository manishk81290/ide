import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Terminal } from 'xterm';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  executedCommand:string;
  command: string = '';
  executing:Array<string>;
  constructor() {
   }

  ngOnInit(): void {
    this.executedCommand='';
    var term = new Terminal();
    term.open(document.getElementById('terminal'));
    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  }

  execCommand(){
    this.executedCommand=(this.executedCommand==='')?'> '+this.command:this.executedCommand+'<br /><br />> '+this.command;
    this.command="";
    const sleep = delayTime => new Promise(clbk => setTimeout(clbk, delayTime));
    (async () => {
      this.executedCommand+='<br /><br />> Compiling code.....';
      await sleep(2000);
      this.executedCommand+='<br /><br />> Executing';
      await sleep(3000);
      this.executedCommand+='<br /><br />> Hello World!';
  })()
  }

}
