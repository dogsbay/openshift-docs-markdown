{%- set _mod_docs_content_type = "CONCEPT" %}
# Running latency tests in a disconnected cluster {id="cnf-performing-end-to-end-tests-disconnected-mode_{{ context }}"}

The CNF tests image can run tests in a disconnected cluster that is not able to reach external registries. This requires two steps: {._abstract}

1.  Mirroring the `cnf-tests` image to the custom disconnected registry.
1.  Instructing the tests to consume the images from the custom disconnected registry.