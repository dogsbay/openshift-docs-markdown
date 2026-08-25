{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a secret from a .gitconfig file {id="builds-gitconfig-file_{{ context }}"}

If the cloning of your application is dependent on a `.gitconfig` file, then you can create a secret that contains it. Add it to the builder service account and then your `BuildConfig`.

**Procedure**

*   To create a secret from a `.gitconfig` file:

```terminal
$ oc create secret generic <secret_name> --from-file=<path/to/.gitconfig>
```


:::note

SSL verification can be turned off if `sslVerify=false` is set for the `http`
section in your `.gitconfig` file:

```text
[http]
        sslVerify=false
```

:::