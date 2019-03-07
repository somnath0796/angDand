import { Component } from "@angular/core";

@Component({
    selector: 'my-quote',
    template: `
        <div class='comp'>
            <h2>Quote Component</h2>

            <div *ngFor="let quote of quotes">
            <p class="quote">{{quote.line}} <br/>-- {{quote.author}}</p>
            </div>
        </div>
    `,
    styles: [
        `
            h2{
                color: #000;
            }
            .comp{
                background-color: #bcb;
            }
            .quote {
                background-color: #e80060;
                color: #ffd;
                font-style: italic;
            }
        `
    ]
})

export class QuoteComponent {
    quotes = [
        {
            "line": 'That\'s my secret, I\'m always angry...',
            "author": 'Bruce Banner'
        },
        {
            "line": "AAaarghhhh!!!!! Smaash",
            "author": 'The Hulk'
        },
        {
            "line": "Why so serious?",
            "author": 'Joker'
        },
        {
            "line": "When you play the game of thrones, you win or you die.",
            "author": 'Cersei'
        },
    ]
}