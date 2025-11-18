{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "cpp-dev-shell";

  buildInputs = [
    pkgs.gcc
    pkgs.cmake
    pkgs.pkg-config
    pkgs.bear

    pkgs.crow
  ];

  shellHook = ''
    echo "Environment Swapped"
  '';
}
