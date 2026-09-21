{%- set _mod_docs_content_type = "PROCEDURE" %}
# Renew a certificate for custom domains {id="osd-applications-renew-custom-domains_{{ context }}"}

You can renew certificates with the Custom Domains Operator (CDO) by using the `oc` CLI tool. {._abstract}

**Prerequisites**

*   You have the latest version of the `oc` CLI tool installed.

**Procedure**

1.  Create a new secret:
    ```terminal
    $ oc create secret tls <secret_new> --cert=fullchain.pem --key=privkey.pem -n <my_project>
    ```
1.  Patch the `CustomDomain` CR:
    ```terminal
    $ oc patch customdomain <company_name> --type='merge' -p '{"spec":{"certificate":{"name":"<secret_new>"}}}'
    ```
1.  Delete the old secret:
    ```terminal
    $ oc delete secret <secret_old> -n <my_project>
    ```

**Troubleshooting**

*   [Error creating TLS secret](https://access.redhat.com/solutions/5419501)