{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the service account for your pod {id="cloud-experts-deploying-application-integrating-aws-create-service-pod_{{ context }}"}

Create your new service account that you use on your pod. {._abstract}

**Procedure**

1.  Get the ARN for the AWS IAM role we created so that it will be included as an annotation when you create your service account by running the following command:
    ```terminal
    $ export APP_IAM_ROLE_ARN=$(aws iam get-role --role-name=ostoy-sa-role --query Role.Arn --output text)
    ```
1.  Create the service account by running the following command:
    ```terminal
    $ cat <<EOF | oc apply -f -
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: ostoy-sa
      namespace: ${OSTOY_NAMESPACE}
      annotations:
        eks.amazonaws.com/role-arn: "$APP_IAM_ROLE_ARN"
    EOF
    ```

    :::important

    Do not change the name of the service account from "ostoy-sa" or you will have to change the trust relationship for the AWS IAM role.
    
    :::

1.  Grant the service account the `restricted` role by running the following command:
    ```terminal
    $ oc adm policy add-scc-to-user restricted system:serviceaccount:${OSTOY_NAMESPACE}:ostoy-sa
    ```
1.  Confirm that the annotation was successful by running the following command:
    ```terminal
    $ oc describe serviceaccount ostoy-sa -n ${OSTOY_NAMESPACE}
    ```

    ***Example output***
    ```terminal
    Name:                ostoy-sa
    Namespace:           ostoy
    Labels:              <none>
    Annotations:         eks.amazonaws.com/role-arn: arn:aws:iam::000000000000:role/ostoy-sa-role
    Image pull secrets:  ostoy-sa-dockercfg-b2l94
    Mountable secrets:   ostoy-sa-dockercfg-b2l94
    Tokens:              ostoy-sa-token-jlc6d
    Events:              <none>
    ```