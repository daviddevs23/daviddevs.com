#include <crow.h>
#include <crow/app.h>
#include <crow/mustache.h>
#include <iostream>

int main() {
    crow::SimpleApp app;
    crow::mustache::set_global_base(".");

    CROW_ROUTE(app, "/")
    ([]() {
        auto page = crow::mustache::load("templates/index.html");
        return page.render();
    });

    app.port(9090).run();
}
