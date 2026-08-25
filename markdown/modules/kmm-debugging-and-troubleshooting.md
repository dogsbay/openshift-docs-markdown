{%- set _mod_docs_content_type = "CONCEPT" %}
# Debugging and troubleshooting {id="kmm-debugging-and-troubleshooting_{{ context }}"}

Unsigned or incorrectly signed kmods in KMM driver containers on {{ product_title }} can cause `PostStartHookError` or `CrashLoopBackOff` states.
You can verify signing issues by running `oc describe` on the container and checking for a `Required key not available` error. {._abstract}

The following message appears in this scenario:

```terminal
modprobe: ERROR: could not insert '<your_kmod_name>': Required key not available
```