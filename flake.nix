{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
  };

  outputs =
    { self, nixpkgs }:
    let
      # Systems supported
      allSystems = [
        "x86_64-linux" # 64-bit Intel/AMD Linux
        "aarch64-linux" # 64-bit ARM Linux (not tested)
        "x86_64-darwin" # 64-bit Intel macOS (not tested)
        "aarch64-darwin" # 64-bit ARM macOS (not tested)
      ];

      forAllSystems =
        f: nixpkgs.lib.genAttrs allSystems (system: f { pkgs = import nixpkgs { inherit system; }; });
    in
    {
      devShells = forAllSystems (
        { pkgs }:
        {
          default = pkgs.mkShell {
            packages = (
              with pkgs;
              [
                nodejs
                git

                # Nonessentials
                nil
                nixfmt-rfc-style
              ]
            );
          };
        }
      );
    };
}
