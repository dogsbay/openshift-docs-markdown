{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshoot authentication failures {id="osdk-cco-aws-sts-tshooting-auth-fail_{{ context }}"}

If authentication was not successful, ensure you can assume the role with web identity by using the token provided to the Operator. {._abstract}

**Procedure**

1.  Extract the token from the pod:
    ```terminal
    $ oc exec operator-pod -n <namespace_name> \
        -- cat /var/run/secrets/openshift/serviceaccount/token
    ```
1.  Extract the role ARN from the pod:
    ```terminal
    $ oc exec operator-pod -n <namespace_name> \
        -- cat /<path>/<to>/<secret_name>
    ```

    Do not use root for the path.
1.  Try assuming the role with the web identity token:
    ```terminal
    $ aws sts assume-role-with-web-identity \
        --role-arn $ROLEARN \
        --role-session-name <session_name> \
        --web-identity-token $TOKEN
    ```