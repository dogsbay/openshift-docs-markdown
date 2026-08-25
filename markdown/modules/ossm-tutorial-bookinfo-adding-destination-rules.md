{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding default destination rules {id="ossm-tutorial-bookinfo-adding-destination-rules_{{ context }}"}

Before you can use the Bookinfo application, you must first add default destination rules. There are two preconfigured YAML files, depending on whether or not you enabled mutual transport layer security (TLS) authentication.

**Procedure**

1.  To add destination rules, run one of the following commands:
    *   If you did not enable mutual TLS:

        ```bash {minja}
        $ oc apply -n bookinfo -f https://raw.githubusercontent.com/Maistra/istio/maistra-{{ MaistraVersion }}/samples/bookinfo/networking/destination-rule-all.yaml
        ```
    *   If you enabled mutual TLS:

        ```bash {minja}
        $ oc apply -n bookinfo -f https://raw.githubusercontent.com/Maistra/istio/maistra-{{ MaistraVersion }}/samples/bookinfo/networking/destination-rule-all-mtls.yaml
        ```

        You should see output similar to the following:
        ```terminal
        destinationrule.networking.istio.io/productpage created
        destinationrule.networking.istio.io/reviews created
        destinationrule.networking.istio.io/ratings created
        destinationrule.networking.istio.io/details created
        ```