import { getAppIdFromUrl } from "../client/helpers/url";

test("parse valid url", () => {
  expect(
    getAppIdFromUrl("http://localhost:8080/game/570/news/3938951840891790038")
  ).toBe("570");
});

test("parse missing appid", () => {
  expect(
    getAppIdFromUrl("http://localhost:8080/news/3938951840891790038")
  ).toBeNull();
});

test("parse invalid url", () => {
  expect(
    getAppIdFromUrl("http://localhost:8080/game/test/news/3938951840891790038")
  ).toBeNull();
});
