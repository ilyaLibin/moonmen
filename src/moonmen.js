class Moonmen {
  constructor(props) {

  }

  async optimize() {
    const blocks = Array.from(arguments);

    blocks.forEach(async (step) => {
      try {
        await step.run()
      } catch(e) {
        console.log("error: ", e)
      }
    })
  }
}

module.exports = Moonmen;

