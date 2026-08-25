{%- set _mod_docs_content_type = "CONCEPT" %}
# Git source {id="builds-source-code_{{ context }}"}

When specified, source code is fetched from the supplied location.

{% if not openshift_online %}
If you supply an inline Dockerfile, it overwrites the Dockerfile in the `contextDir` of the Git repository.
{% endif %}

The source definition is part of the `spec` section in the `BuildConfig`:

```yaml
source:
  git: (1)
    uri: "https://github.com/openshift/ruby-hello-world"
    ref: "master"
  contextDir: "app/dir" (2)
{%- if not openshift_online %}
  dockerfile: "FROM openshift/ruby-22-centos7\nUSER example" (3)
{%- endif %}
```
1.  The `git` field contains the Uniform Resource Identifier (URI) to the remote Git repository of the source code. You must specify the value of the `ref` field to check out a specific Git reference. A valid `ref` can be a SHA1 tag or a branch name. The default value of the `ref` field is `master`.
1.  The `contextDir` field allows you to override the default location inside the source code repository where the build looks for the application source code. If your application exists inside a sub-directory, you can override the default location (the root folder) using this field.
{%- if not openshift_online %}
1.  If the optional `dockerfile` field is provided, it should be a string containing a Dockerfile that overwrites any Dockerfile that may exist in the source repository.
{% endif %}

If the `ref` field denotes a pull request, the system uses a `git fetch` operation and then checkout `FETCH_HEAD`.

When no `ref` value is provided, {{ product_title }} performs a shallow clone (`--depth=1`). In this case, only the files associated with the most recent commit on the default branch (typically `master`) are downloaded. This results in repositories downloading faster, but without the full commit history. To perform a full `git clone` of the default branch of a specified repository, set `ref` to the name of the default branch (for example `main`).


:::warning

Git clone operations that go through a proxy that is performing man in the middle (MITM) TLS hijacking or reencrypting of the proxied connection do not work.

:::