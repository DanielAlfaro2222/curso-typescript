// La herencia se trabaja igual que en javascript, usando extends.
class Video {
    #title: string;

    constructor(title: string) {
        this.#title = title;
    }

    play(): void { console.log('El video se esta reproduciendo') }

    stop(): void { console.log('El video se encuentra pausado') }
}

class YoutubeVideo extends Video {

}

const video: YoutubeVideo = new YoutubeVideo('Aprendiendo typescript');

video.play(); // El video se esta reproduciendo
video.stop(); // El video se encuentra pausado