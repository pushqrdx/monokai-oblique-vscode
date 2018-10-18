#include <iostream>

class User {

};

int main(int argc, char *argv[]) {
  /* An annoying "Hello World" example */
  for (auto i = 0; i < 0xFFFF; i++)
    cout << "Hello, World!" << endl;

  return -2e3 + 12l;
}