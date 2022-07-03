const channel = {
  title: "cyberdude",
  getTitle() {
    console.log(this.title);
  },
};
channel.getTitle();

// Copy & paste this code in browser. You get Window(global scope) for this
const channelOne = {
  title: "cyberdude",
  getTitle(title1) {
    console.log(this);
    console.log(channel.title);
    console.log(this.title);
  },
};
channelOne.getTitle("Jerald");
channelOne.getTitle("Praveen");
