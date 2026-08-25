{%- set _mod_docs_content_type = "REFERENCE" %}
# odo service {id="odo-service_{{ context }}"}

`odo` can deploy _services_ with the help of _Operators_.

The list of available Operators and services available for installation can be found using the `odo catalog` command.

Services are created in the context of a _component_, so run the `odo create` command before you deploy services.

A service is deployed using two steps:

1.  Define the service and store its definition in the devfile.
1.  Deploy the defined service to the cluster, using the `odo push` command.

## Creating a new service {id="_creating_a_new_service"}

To create a new service, run the command:

```terminal
$ odo service create
```

For example, to create an instance of a Redis service named `my-redis-service`, you can run the following command:

```terminal
$ odo catalog list services
```

```terminal title="Example output"
Services available through Operators
NAME                      CRDs
redis-operator.v0.8.0     RedisCluster, Redis
```

```terminal
$ odo service create redis-operator.v0.8.0/Redis my-redis-service
```

```terminal title="Example output"
Successfully added service to the configuration; do 'odo push' to create service on the cluster
```

This command creates a Kubernetes manifest in the `kubernetes/` directory, containing the definition of the service, and this file is referenced from the `devfile.yaml` file.

```terminal
$ cat kubernetes/odo-service-my-redis-service.yaml
```

```yaml title="Example output"
 apiVersion: redis.redis.opstreelabs.in/v1beta1
 kind: Redis
 metadata:
   name: my-redis-service
 spec:
   kubernetesConfig:
     image: quay.io/opstree/redis:v6.2.5
     imagePullPolicy: IfNotPresent
     resources:
       limits:
         cpu: 101m
         memory: 128Mi
       requests:
         cpu: 101m
         memory: 128Mi
     serviceType: ClusterIP
   redisExporter:
     enabled: false
     image: quay.io/opstree/redis-exporter:1.0
   storage:
     volumeClaimTemplate:
       spec:
         accessModes:
         - ReadWriteOnce
         resources:
           requests:
             storage: 1Gi
```

```terminal
$ cat devfile.yaml
```

```yaml title="Example output"
[...]
components:
- kubernetes:
    uri: kubernetes/odo-service-my-redis-service.yaml
  name: my-redis-service
[...]
```

Note that the name of the created instance is optional. If you do not provide a name, it will be the lowercase name of the service. For example, the following command creates an instance of a Redis service named `redis`:

```terminal
$ odo service create redis-operator.v0.8.0/Redis
```

### Inlining the manifest {id="_inlining_the_manifest"}

By default, a new manifest is created in the `kubernetes/` directory, referenced from the `devfile.yaml` file. It is possible to inline the manifest inside the `devfile.yaml` file using the `--inlined` flag:

```terminal
$ odo service create redis-operator.v0.8.0/Redis my-redis-service --inlined
```

```terminal title="Example output"
Successfully added service to the configuration; do 'odo push' to create service on the cluster
```

```terminal title="Example command"
$ cat devfile.yaml
```

```yaml title="Example output"
[...]
components:
- kubernetes:
    inlined: |
      apiVersion: redis.redis.opstreelabs.in/v1beta1
      kind: Redis
      metadata:
        name: my-redis-service
      spec:
        kubernetesConfig:
          image: quay.io/opstree/redis:v6.2.5
          imagePullPolicy: IfNotPresent
          resources:
            limits:
              cpu: 101m
              memory: 128Mi
            requests:
              cpu: 101m
              memory: 128Mi
          serviceType: ClusterIP
        redisExporter:
          enabled: false
          image: quay.io/opstree/redis-exporter:1.0
        storage:
          volumeClaimTemplate:
            spec:
              accessModes:
              - ReadWriteOnce
              resources:
                requests:
                  storage: 1Gi
  name: my-redis-service
[...]
```

### Configuring the service {id="_configuring_the_service"}

Without specific customization, the service will be created with a default configuration. You can use either command-line arguments or a file to specify your own configuration.

#### Using command-line arguments {id="_using_command-line_arguments"}

Use the `--parameters` (or `-p`) flag to specify your own configuration.

The following example configures the Redis service with three parameters:

```terminal
$ odo service create redis-operator.v0.8.0/Redis my-redis-service \
    -p kubernetesConfig.image=quay.io/opstree/redis:v6.2.5 \
    -p kubernetesConfig.serviceType=ClusterIP \
    -p redisExporter.image=quay.io/opstree/redis-exporter:1.0
```

```terminal title="Example output"
Successfully added service to the configuration; do 'odo push' to create service on the cluster
```

```terminal title="Example command"
$ cat kubernetes/odo-service-my-redis-service.yaml
```

```yaml title="Example output"
apiVersion: redis.redis.opstreelabs.in/v1beta1
kind: Redis
metadata:
  name: my-redis-service
spec:
  kubernetesConfig:
    image: quay.io/opstree/redis:v6.2.5
    serviceType: ClusterIP
  redisExporter:
    image: quay.io/opstree/redis-exporter:1.0
```

You can obtain the possible parameters for a specific service using the `odo catalog describe service` command.

#### Using a file {id="_using_a_file"}

Use a YAML manifest to configure your own specification. In the following example, the Redis service is configured with three parameters.

1.  Create a manifest:
    ```terminal
    $ cat > my-redis.yaml <<EOF
    apiVersion: redis.redis.opstreelabs.in/v1beta1
    kind: Redis
    metadata:
      name: my-redis-service
    spec:
      kubernetesConfig:
        image: quay.io/opstree/redis:v6.2.5
        serviceType: ClusterIP
      redisExporter:
        image: quay.io/opstree/redis-exporter:1.0
    EOF
    ```
1.  Create the service from the manifest:
    ```terminal
    $ odo service create --from-file my-redis.yaml
    ```
    ```terminal title="Example output"
    Successfully added service to the configuration; do 'odo push' to create service on the cluster
    ```

## Deleting a service {id="_deleting_a_service"}

To delete a service, run the command:

```terminal
$ odo service delete
```

```terminal
$ odo service list
```

```terminal title="Example output"
NAME                       MANAGED BY ODO     STATE               AGE
Redis/my-redis-service     Yes (api)          Deleted locally     5m39s
```

```terminal
$ odo service delete Redis/my-redis-service
```

```terminal title="Example output"
? Are you sure you want to delete Redis/my-redis-service Yes
Service "Redis/my-redis-service" has been successfully deleted; do 'odo push' to delete service from the cluster
```

Use the `--force` (or `-f`) flag to force the deletion of the service without confirmation.

## Listing services {id="_listing_services"}

To list the services created for your component, run the command:

```terminal
$ odo service list
```

```terminal
$ odo service list
```

```terminal title="Example output"
NAME                       MANAGED BY ODO     STATE             AGE
Redis/my-redis-service-1   Yes (api)          Not pushed
Redis/my-redis-service-2   Yes (api)          Pushed            52s
Redis/my-redis-service-3   Yes (api)          Deleted locally   1m22s
```

For each service, `STATE` indicates if the service has been pushed to the cluster using the `odo push` command, or if the service is still running on the cluster but removed from the devfile locally using the `odo service delete` command.

## Getting information about a service {id="_getting_information_about_a_service"}

To get details of a service such as its kind, version, name, and list of configured parameters, run the command:

```terminal
$ odo service describe
```

```terminal title="Example output"
$ odo service describe Redis/my-redis-service
```

```terminal title="Example output"
Version: redis.redis.opstreelabs.in/v1beta1
Kind: Redis
Name: my-redis-service
Parameters:
NAME                           VALUE
kubernetesConfig.image         quay.io/opstree/redis:v6.2.5
kubernetesConfig.serviceType   ClusterIP
redisExporter.image            quay.io/opstree/redis-exporter:1.0
```