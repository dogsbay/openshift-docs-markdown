{%- set _mod_docs_content_type = "PROCEDURE" %}
# Displaying webhook URLs {id="builds-displaying-webhook-urls_{{ context }}"}

You can use the `oc describe` command to display webhook URLs associated with a build configuration. If the command does not display any webhook URLs, then no webhook trigger is currently defined for that build configuration.

**Procedure**

*   To display any webhook URLs associated with a `BuildConfig`, run the following command:

```terminal
$ oc describe bc <name>
```