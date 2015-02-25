// Testing the FilmModel

describe("Film Model", function () {
  beforeEach(function () {
    this.filmModel = new FilmModel();
    this.filmStub = sinon.stub(this.filmModel, 'save');
  });

  it("should be an instance of FilmModel Class", function () {
    expect(this.filmModel).is.instanceof(FilmModel);
  });

  it("should have correct urlRoot", function () {
    expect(this.filmModel.urlRoot).to.be.ok;
    expect(this.filmModel.urlRoot).to.be.equal("http://tiy-fee-rest.herokuapp.com/collections/ravenbackbone");
  });

  it("should be able to add property to model", function () {
    expect(this.filmModel.attributes.title).to.be.ok;
    this.filmModel.set({title: "Into the Woods"});
    expect(this.filmModel.attributes.title).to.equal("Into the Woods");
  });

  it("should save my model when I call save", function () {
    this.filmModel.set({title: "Monsters, Inc."});
    this.filmModel.save();

    expect(this.filmStub).to.have.been.calledOnce;
    this.filmModel.set({date: "January 1, 2015"});
    this.filmModel.save();
    expect(this.filmStub).to.have.been.calledTwice;
  })

  it("should have a default photo", function () {
    expect(this.filmModel.attributes.image).to.equal("http://2.bp.blogspot.com/-ilRF_E1g9d0/UNH4WkJPrxI/AAAAAAAAAZM/wdha7-dFYss/s1600/back_final-01.png");
  })
});
