{ pkgs, phpVersion ? "php82" }:

let
  php = pkgs.${phpVersion}.buildEnv {
    extensions = { all, enabled }: with all; [
      intl
      zip
    ];
  };
in

pkgs.mkShell {
  buildInputs = [
    php
  ];
}
