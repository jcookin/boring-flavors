{ pkgs ? import <nixpkgs> {} }:
with pkgs;

pkgs.mkShell {

  nativeBuildInputs = with pkgs.buildPackages; [ mdbook ];

}