import { breakdownURIPath } from ".";

describe("breakdownURIPath", () => {
  it("returns empty Array from empty path", () => {
    const pathname = "";
    const result = breakdownURIPath(pathname);
    expect(result).toMatchInlineSnapshot(`Array []`);
  });

  it("returns valid array Array for '/'", () => {
    const pathname = "/";
    const result = breakdownURIPath(pathname);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "/",
      ]
    `);
  });

  it("returns valid array Array for '/test'", () => {
    const pathname = "/test";
    const result = breakdownURIPath(pathname);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "/",
        "/test",
      ]
    `);
  });

  it("returns valid array Array for '/test/'", () => {
    const pathname = "/test/";
    const result = breakdownURIPath(pathname);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "/",
        "/test/",
      ]
    `);
  });

  it("returns valid array Array for '/test/example.html'", () => {
    const pathname = "/test/example.html";
    const result = breakdownURIPath(pathname);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "/",
        "/test/",
        "/test/example.html",
      ]
    `);
  });

  it("returns valid array Array for '/test/test2/example.html'", () => {
    const pathname = "/test/test2/example.html";
    const result = breakdownURIPath(pathname);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "/",
        "/test/",
        "/test/test2/",
        "/test/test2/example.html",
      ]
    `);
  });

  it("returns valid array Array for '/test/test2/test3/test4/test5/'", () => {
    const pathname = "/test/test2/test3/test4/test5/";
    const result = breakdownURIPath(pathname);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "/",
        "/test/",
        "/test/test2/",
        "/test/test2/test3/",
        "/test/test2/test3/test4/",
        "/test/test2/test3/test4/test5/",
      ]
    `);
  });

  it("returns valid array Array for '/test/test2/test3/test4/test5'", () => {
    const pathname = "/test/test2/test3/test4/test5";
    const result = breakdownURIPath(pathname);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "/",
        "/test/",
        "/test/test2/",
        "/test/test2/test3/",
        "/test/test2/test3/test4/",
        "/test/test2/test3/test4/test5",
      ]
    `);
  });

  it("returns valid array Array for '/test/test2/test3/test4/test5/example.html'", () => {
    const pathname = "/test/test2/test3/test4/test5/example.html";
    const result = breakdownURIPath(pathname);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "/",
        "/test/",
        "/test/test2/",
        "/test/test2/test3/",
        "/test/test2/test3/test4/",
        "/test/test2/test3/test4/test5/",
        "/test/test2/test3/test4/test5/example.html",
      ]
    `);
  });
});
