{%- set _mod_docs_content_type = "REFERENCE" %}
# Running a function locally {id="serverless-kn-func-run_{{ context }}"}

You can use the `kn func run` command to run a function locally in the current directory or in the directory specified by the `--path` flag. If the function that you are running has never previously been built, or if the project files have been modified since the last time it was built, the `kn func run` command builds the function before running it by default.

```terminal title="Example command to run a function in the current directory"
$ kn func run
```

```terminal title="Example command to run a function in a directory specified as a path"
$ kn func run --path=<directory_path>
```

You can also force a rebuild of an existing image before running the function, even if there have been no changes to the project files, by using the `--build` flag:

```terminal title="Example run command using the build flag"
$ kn func run --build
```

If you set the `build` flag as false, this disables building of the image, and runs the function using the previously built image:

```terminal title="Example run command using the build flag"
$ kn func run --build=false
```

You can use the help command to learn more about `kn func run` command options:

```terminal title="Build help command"
$ kn func help run
```