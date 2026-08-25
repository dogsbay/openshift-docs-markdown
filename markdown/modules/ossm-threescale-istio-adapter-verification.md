{%- set _mod_docs_content_type = "PROCEDURE" %}
# 3scale Istio adapter verification {id="ossm-threescale-istio-adapter-verification_{{ context }}"}

You might want to check whether the 3scale Istio adapter is working as expected. If your adapter is not working, use the following steps to help troubleshoot the problem.

**Procedure**

1.  Ensure the _3scale-adapter_ pod is running in the {{ SMProductShortName }} control plane namespace:
    ```terminal
    $ oc get pods -n istio-system
    ```
1.  Check that the _3scale-adapter_ pod has printed out information about itself booting up, such as its version:
    ```terminal
    $ oc logs istio-system
    ```
1.  When performing requests to the services protected by the 3scale adapter integration, always try requests that lack the right credentials and ensure they fail. Check the 3scale adapter logs to gather additional information.