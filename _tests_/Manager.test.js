const Manager = require("../lib/Manager");

test("generates a Manager object", () => {
    const manager = new Manager("Manager", "", "", "")

    expect(manager.getRole()).toBe("Manager");
    expect(manager.getOfficeNumber()).toBe("OfficeNumber");

});