{%- set _mod_docs_content_type = "CONCEPT" %}

# Limitations of unprivileged builds {id="limitations-of-unprivileged-builds_{{ context }}"}

The process for unprivileged builds works with most `Dockerfile` objects. However, there are some known limitations might cause a build to fail:

*   Using the `--mount=type=cache` option might fail due to lack of necessay permissions issues. For more information, see this [article](https://access.redhat.com/solutions/6969529).
*   Using the `--mount=type=secret` option fails because mounting resources requires additionnal capabilities that are not provided by the custom SCC.