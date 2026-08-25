{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting a build with source {id="builds-basic-start-source_{{ context }}"}

Rather than relying on a Git source pull
{%- if openshift_origin or openshift_enterprise %}
or a Dockerfile
{%- endif %}
for a build, you can also start a build by directly pushing your source, which could be the contents of a Git or SVN working directory, a set of pre-built binary artifacts you want to deploy, or a single file. This can be done by specifying one of the following options for the `start-build` command:

| Option | Description |
| --- | --- |
| `--from-dir=<directory>` | Specifies a directory that will be archived and used as a binary input for the build. |
| `--from-file=<file>` | Specifies a single file that will be the only file in the build source. The file is placed in the root of an empty directory with the same file name as the original file provided. |
| `--from-repo=<local_source_repo>` | Specifies a path to a local repository to use as the binary input for a build. Add the `--commit` option to control which branch, tag, or commit is used for the build. |

When passing any of these options directly to the build, the contents are streamed to the build and override the current build source settings.


:::note

Builds triggered from binary input will not preserve the source on the server, so rebuilds triggered by base image changes will use the source specified in the build configuration.

:::


**Procedure**

*   To start a build from a source code repository and send the contents of a local Git repository as an archive from the tag `v2`, enter the following command:
    ```terminal
    $ oc start-build hello-world --from-repo=../hello-world --commit=v2
    ```