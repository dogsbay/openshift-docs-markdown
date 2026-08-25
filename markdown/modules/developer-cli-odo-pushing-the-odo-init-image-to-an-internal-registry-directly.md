{%- set _mod_docs_content_type = "PROCEDURE" %}
# Pushing the `odo` init image to an {{ product_registry }} directly {id="pushing-the-odo-init-image-to-an-internal-registry-directly_{{ context }}"}

If your cluster allows images to be pushed to the {{ product_registry }} directly, push the `odo` init image to the registry as follows:

## Pushing the init image directly on Linux {id="pushing-the-init-image-directly-on-linux_{{ context }}"}

**Procedure**

1.  Enable the default route:
    ```terminal
    $ oc patch configs.imageregistry.operator.openshift.io cluster -p '{"spec":{"defaultRoute":true}}' --type='merge' -n openshift-image-registry
    ```
1.  Get a wildcard route CA:
    ```terminal
    $ oc get secret router-certs-default -n openshift-ingress -o yaml
    ```
    ```terminal title="Example output"
    apiVersion: v1
    data:
      tls.crt: **************************
      tls.key: ##################
    kind: Secret
    metadata:
      [...]
    type: kubernetes.io/tls
    ```
1.  Use `base64` to encode the root certification authority (CA) content of your mirror registry:
    ```terminal
    $ echo <tls.crt> | base64 --decode > ca.crt
    ```
1.  Trust a CA in your client platform:
    ```terminal
    $ sudo cp ca.crt  /etc/pki/ca-trust/source/anchors/externalroute.crt && sudo update-ca-trust enable && sudo systemctl daemon-reload && sudo systemctl restart docker
    ```
1.  Log in to the {{ product_registry }}:
    ```terminal
    $ oc get route -n openshift-image-registry
    ```
    ```terminal title="Example output"
    NAME       HOST/PORT    PATH   SERVICES     PORT  TERMINATION   WILDCARD
    default-route   <registry_path>          image-registry   <all>   reencrypt     None
    ```
    ```terminal
    $ docker login <registry_path> -u kubeadmin -p $(oc whoami -t)
    ```
1.  Push the `odo` init image:
    ```terminal
    $ docker pull registry.access.redhat.com/openshiftdo/odo-init-image-rhel7:<tag>
    ```
    ```terminal
    $ docker tag registry.access.redhat.com/openshiftdo/odo-init-image-rhel7:<tag> <registry_path>/openshiftdo/odo-init-image-rhel7:<tag>
    ```
    ```terminal
    $ docker push <registry_path>/openshiftdo/odo-init-image-rhel7:<tag>
    ```
1.  Override the default `odo` init image path by setting the `ODO_BOOTSTRAPPER_IMAGE` environment variable:
    ```terminal
    $ export ODO_BOOTSTRAPPER_IMAGE=<registry_path>/openshiftdo/odo-init-image-rhel7:1.0.1
    ```

## Pushing the init image directly on MacOS {id="pushing-the-init-image-directly-on-macos_{{ context }}"}

**Procedure**

1.  Enable the default route:
    ```terminal
    $ oc patch configs.imageregistry.operator.openshift.io cluster -p '{"spec":{"defaultRoute":true}}' --type='merge' -n openshift-image-registry
    ```
1.  Get a wildcard route CA:
    ```terminal
    $ oc get secret router-certs-default -n openshift-ingress -o yaml
    ```
    ```terminal title="Example output"
    apiVersion: v1
    data:
      tls.crt: **************************
      tls.key: ##################
    kind: Secret
    metadata:
      [...]
    type: kubernetes.io/tls
    ```
1.  Use `base64` to encode the root certification authority (CA) content of your mirror registry:
    ```terminal
    $ echo <tls.crt> | base64 --decode > ca.crt
    ```
1.  Trust a CA in your client platform:
    ```terminal
    $ sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ca.crt
    ```
1.  Log in to the {{ product_registry }}:
    ```terminal
    $ oc get route -n openshift-image-registry
    -----
    +
    .Example output
    [source,terminal]
    ```

    NAME       HOST/PORT    PATH   SERVICES     PORT  TERMINATION   WILDCARD
    default-route   &lt;registry_path>          image-registry   &lt;all>   reencrypt     None
```

[source,terminal]
```
$ docker login &lt;registry_path> -u kubeadmin -p $(oc whoami -t)
```

. Push the `odo` init image:

[source,terminal]
```
$ docker pull registry.access.redhat.com/openshiftdo/odo-init-image-rhel7:&lt;tag>
```

[source,terminal]
```
$ docker tag registry.access.redhat.com/openshiftdo/odo-init-image-rhel7:&lt;tag> &lt;registry_path>/openshiftdo/odo-init-image-rhel7:&lt;tag>
```

[source,terminal]
```
$ docker push &lt;registry_path>/openshiftdo/odo-init-image-rhel7:&lt;tag>
```

. Override the default `odo` init image path by setting the `ODO_BOOTSTRAPPER_IMAGE` environment variable:

[source,terminal]
```
$ export ODO_BOOTSTRAPPER_IMAGE=&lt;registry_path>/openshiftdo/odo-init-image-rhel7:1.0.1
```


[id="pushing-the-init-image-directly-on-windows_{context}"]

== Pushing the init image directly on Windows

.Procedure

. Enable the default route:

[source,terminal,subs="attributes+"]
```
PS C:\> oc patch configs.imageregistry.operator.openshift.io cluster -p '{"spec":{"defaultRoute":true}}' --type='merge' -n openshift-image-registry
```

. Get a wildcard route CA:

[source,terminal,subs="attributes+"]
```
PS C:\> oc get secret router-certs-default -n openshift-ingress -o yaml
```

.Example output
[source,terminal,subs="attributes+"]
```
apiVersion: v1
data:
  tls.crt: **************************
  tls.key: <mark>#</mark><mark>#</mark><mark>#</mark><mark>#</mark><mark>#</mark><mark>#</mark>
kind: Secret
metadata:
  [...]
type: kubernetes.io/tls
```

. Use `base64` to encode the root certification authority (CA) content of your mirror registry:

[source,terminal,subs="attributes+"]
```
PS C:\> echo &lt;tls.crt> | base64 --decode > ca.crt
```

. As an administrator, trust a CA in your client platform by executing the following command:

[source,terminal,subs="attributes+"]
```
PS C:\WINDOWS\system32> certutil -addstore -f "ROOT" ca.crt
```

. Log in to the {product-registry}:

[source,terminal,subs="attributes+"]
```
PS C:\> oc get route -n openshift-image-registry
```

.Example output
[source,terminal,subs="attributes+"]
```
NAME       HOST/PORT    PATH   SERVICES     PORT  TERMINATION   WILDCARD
default-route   &lt;registry_path>          image-registry   &lt;all>   reencrypt     None
```

[source,terminal,subs="attributes+"]
```
PS C:\> docker login &lt;registry_path> -u kubeadmin -p $(oc whoami -t)
```

. Push the `odo` init image:

[source,terminal,subs="attributes+"]
```
PS C:\> docker pull registry.access.redhat.com/openshiftdo/odo-init-image-rhel7:&lt;tag>
```

[source,terminal,subs="attributes+"]
```
PS C:\> docker tag registry.access.redhat.com/openshiftdo/odo-init-image-rhel7:&lt;tag> &lt;registry_path>/openshiftdo/odo-init-image-rhel7:&lt;tag>
```

[source,terminal,subs="attributes+"]
```
PS C:\> docker push &lt;registry_path>/openshiftdo/odo-init-image-rhel7:&lt;tag>
```

. Override the default `odo` init image path by setting the `ODO_BOOTSTRAPPER_IMAGE` environment variable:

[source,terminal,subs="attributes+"]
```
PS C:\> $env:ODO_BOOTSTRAPPER_IMAGE="&lt;registry_path>/openshiftdo/odo-init-image-rhel7:&lt;tag>"
```