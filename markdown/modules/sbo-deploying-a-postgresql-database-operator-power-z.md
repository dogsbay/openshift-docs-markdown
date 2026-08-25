{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a PostgreSQL Operator {id="sbo-deploying-a-postgresql-operator-instance-power-z_{{ context }}"}

**Procedure**

1.  To deploy the Dev4Devs PostgreSQL Operator in the `my-petclinic` namespace run the following command in shell:

```terminal
$ oc apply -f - << EOD
---
apiVersion: v1
kind: Namespace
metadata:
  name: my-petclinic
---
apiVersion: operators.coreos.com/v1
kind: OperatorGroup
metadata:
  name: postgres-operator-group
  namespace: my-petclinic
---
apiVersion: operators.coreos.com/v1alpha1
kind: CatalogSource
metadata:
  name: ibm-multiarch-catalog
  namespace: openshift-marketplace
spec:
  sourceType: grpc
  image: quay.io/ibm/operator-registry-<architecture> (1)
  imagePullPolicy: IfNotPresent
  displayName: ibm-multiarch-catalog
  updateStrategy:
    registryPoll:
      interval: 30m
---
apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: postgresql-operator-dev4devs-com
  namespace: openshift-operators
spec:
  channel: alpha
  installPlanApproval: Automatic
  name: postgresql-operator-dev4devs-com
  source: ibm-multiarch-catalog
  sourceNamespace: openshift-marketplace
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: database-view
  labels:
    servicebinding.io/controller: "true"
rules:
  - apiGroups:
      - postgresql.dev4devs.com
    resources:
      - databases
    verbs:
      - get
      - list
EOD
```
    1.  The Operator image.
        *   For {{ ibm_power_name }}: `quay.io/ibm/operator-registry-ppc64le:release-4.9`
        *   For {{ ibm_z_name }} and {{ ibm_linuxone_name }}: `quay.io/ibm/operator-registry-s390x:release-4.8`

**Verification**

1.  After the operator is installed, list the operator subscriptions in the `openshift-operators` namespace:
    ```terminal
    $ oc get subs -n openshift-operators
    ```
    ```terminal title="Example output"
    NAME                               PACKAGE                            SOURCE                  CHANNEL
    postgresql-operator-dev4devs-com   postgresql-operator-dev4devs-com   ibm-multiarch-catalog   alpha
    rh-service-binding-operator        rh-service-binding-operator        redhat-operators        stable
    ```