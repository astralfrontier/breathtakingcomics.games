{
  description = "The breathtakingcomics.games website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        packagename = "breathtakingcomics.games";
        packageversion = "1.0.0";
        pkgs = nixpkgs.legacyPackages.${system};
        builddeps = with pkgs; [
          nodejs
        ];
      in
      {
        packages.default = pkgs.buildNpmPackage {
          pname = packagename;
          version = packageversion;
          buildInputs = builddeps;
          src = ./.;
          # npmDepsHash = "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
          npmDepsHash = "sha256-xP4dXB7U8acQBSCNwvEhg9e6vukuKe5kL7MRS5Xmio0=";
          npmFlags = [ "--legacy-peer-deps" ];
          makeCacheWritable = true;
          # https://github.com/sass/embedded-host-node/issues/334
          installPhase = ''
            mkdir $out
            cp -r dist/. $out/
          '';
        };
        devShell = pkgs.mkShell {
          name = packagename;
          packages = builddeps;
        };
      }
    );
}
