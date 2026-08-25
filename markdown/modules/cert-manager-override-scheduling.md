{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring scheduling overrides for cert-manager components {id="cert-manager-override-scheduling_{{ context }}"}

You can configure the pod scheduling from the {{ cert_manager_operator }} API for the {{ cert_manager_operator }} components, such as the cert-manager controller, CA injector, and Webhook. {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} cluster as a user with the `cluster-admin` role.
*   You have installed version 1.15.0 or later of the {{ cert_manager_operator }}.

**Procedure**

*   Update the `certmanager.operator` custom resource to configure pod scheduling overrides for the desired components by running the following command. Use the `overrideScheduling` field under the `controllerConfig`, `webhookConfig`, or `cainjectorConfig` sections to define `nodeSelector` and `tolerations` settings.
    ```terminal
    $ oc patch certmanager.operator cluster --type=merge -p="
    spec:
      controllerConfig:
        overrideScheduling:
          nodeSelector:
            node-role.kubernetes.io/control-plane: ''
          tolerations:
            - key: node-role.kubernetes.io/master
              operator: Exists
              effect: NoSchedule
      webhookConfig:
        overrideScheduling:
          nodeSelector:
            node-role.kubernetes.io/control-plane: ''
          tolerations:
            - key: node-role.kubernetes.io/master
              operator: Exists
              effect: NoSchedule
      cainjectorConfig:
        overrideScheduling:
          nodeSelector:
            node-role.kubernetes.io/control-plane: ''
          tolerations:
            - key: node-role.kubernetes.io/master
              operator: Exists
              effect: NoSchedule"
    "
    ```

    For information about the overridable scheduling parameters, see "Overridable scheduling parameters for the cert-manager components" in "Explanation of fields in the CertManager custom resource".

**Verification**

1.  Verify pod scheduling settings for `cert-manager` pods:
    1.  Check the deployments in the `cert-manager` namespace to confirm they have the correct `nodeSelector` and `tolerations` by running the following command:
        ```terminal
        $ oc get pods -n cert-manager -o wide
        ```
        ```terminal title="Example output"
        NAME                                       READY   STATUS    RESTARTS   AGE   IP            NODE                         NOMINATED NODE   READINESS GATES
        cert-manager-58d9c69db4-78mzp              1/1     Running   0          10m   10.129.0.36   ip-10-0-1-106.ec2.internal   <none>           <none>
        cert-manager-cainjector-85b6987c66-rhzf7   1/1     Running   0          11m   10.128.0.39   ip-10-0-1-136.ec2.internal   <none>           <none>
        cert-manager-webhook-7f54b4b858-29bsp      1/1     Running   0          11m   10.129.0.35   ip-10-0-1-106.ec2.internal   <none>           <none>
        ```
    1.  Check the `nodeSelector` and `tolerations` settings applied to deployments by running the following command:
        ```terminal
        $ oc get deployments -n cert-manager -o jsonpath='{range .items[*]}{.metadata.name}{"\n"}{.spec.template.spec.nodeSelector}{"\n"}{.spec.template.spec.tolerations}{"\n\n"}{end}'
        ```
        ```terminal title="Example output"
        cert-manager
        {"kubernetes.io/os":"linux","node-role.kubernetes.io/control-plane":""}
        [{"effect":"NoSchedule","key":"node-role.kubernetes.io/master","operator":"Exists"}]

        cert-manager-cainjector
        {"kubernetes.io/os":"linux","node-role.kubernetes.io/control-plane":""}
        [{"effect":"NoSchedule","key":"node-role.kubernetes.io/master","operator":"Exists"}]

        cert-manager-webhook
        {"kubernetes.io/os":"linux","node-role.kubernetes.io/control-plane":""}
        [{"effect":"NoSchedule","key":"node-role.kubernetes.io/master","operator":"Exists"}]
        ```
1.  Verify pod scheduling events in the `cert-manager` namespace by running the following command:
    ```terminal
    $ oc get events -n cert-manager --field-selector reason=Scheduled
    ```