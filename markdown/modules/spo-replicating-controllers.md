{%- set _mod_docs_content_type = "PROCEDURE" %}
# Replicate controllers and SecurityContextConstraints {id="spo-replicating-controllers_{{ context }}"}

Deploy SELinux policies for replicating controllers such as deployments or daemon sets so the pods those controllers create can use custom SELinux policies. {._abstract}

Pods that the controllers create do not run with the identity of the user who creates the workload. Unless you select a `ServiceAccount`, the pods might use a restricted `SecurityContextConstraints` (SCC) object that does not allow custom security policies.

**Procedure**

1.  Create a project by running the following command:
    ```terminal
    $ oc new-project nginx-secure
    ```
1.  Create the following `RoleBinding` object to allow SELinux policies to be used in the `nginx-secure` namespace:
    ```yaml
    kind: RoleBinding
    apiVersion: rbac.authorization.k8s.io/v1
    metadata:
      name: spo-nginx
      namespace: nginx-secure
    subjects:
    - kind: ServiceAccount
      name: spo-deploy-test
    roleRef:
      kind: Role
      name: spo-nginx
      apiGroup: rbac.authorization.k8s.io
    ```
1.  Create the `Role` object:
    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: Role
    metadata:
      creationTimestamp: null
      name: spo-nginx
      namespace: nginx-secure
    rules:
    - apiGroups:
      - security.openshift.io
      resources:
      - securitycontextconstraints
      resourceNames:
      - privileged
      verbs:
      - use
    ```
1.  Create the `ServiceAccount` object:
    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      creationTimestamp: null
      name: spo-deploy-test
      namespace: nginx-secure
    ```
1.  Create the `Deployment` object:
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: selinux-test
      namespace: nginx-secure
      metadata:
        labels:
          app: selinux-test
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: selinux-test
      template:
        metadata:
          labels:
            app: selinux-test
        spec:
          serviceAccountName: spo-deploy-test
          securityContext:
            seLinuxOptions:
              type: nginx-secure.process
          containers:
          - name: nginx-unpriv
            image: quay.io/security-profiles-operator/test-nginx-unprivileged:1.21
            ports:
            - containerPort: 8080
    ```

    The `spec.template.spec.securityContext.seLinuxOptions.type` must exist before the Deployment is created.

    :::note

    The SELinux type is not specified in the workload and is handled by the SCC. When the pods are created by the deployment and the `ReplicaSet`, the pods will run with the appropriate profile.
    
    :::


    Ensure that your SCC is usable by only the correct service account. Refer to _Additional resources_ for more information.