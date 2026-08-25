# Deploying a database manually {id="deploying-a-database-manually_{{ context }}"}

1.  List the available services:
    ```terminal
    $ odo catalog list services
    ```
    ```terminal title="Example output"
    NAME                         PLANS
    django-psql-persistent       default
    jenkins-ephemeral            default
    jenkins-pipeline-example     default
    mariadb-persistent           default
    mongodb-persistent           default
    mysql-persistent             default
    nodejs-mongo-persistent      default
    postgresql-persistent        default
    rails-pgsql-persistent       default
    ```
1.  Choose the `mongodb-persistent` type of service and see the required parameters:
    ```terminal
    $ odo catalog describe service mongodb-persistent
    ```
    ```terminal title="Example output"
      ***********************        | *****************************************************
      Name                           | default
      -----------------              | -----------------
      Display Name                   |
      -----------------              | -----------------
      Short Description              | Default plan
      -----------------              | -----------------
      Required Params without a      |
      default value                  |
      -----------------              | -----------------
      Required Params with a default | DATABASE_SERVICE_NAME
      value                          | (default: 'mongodb'),
                                     | MEMORY_LIMIT (default:
                                     | '512Mi'), MONGODB_VERSION
                                     | (default: '3.2'),
                                     | MONGODB_DATABASE (default:
                                     | 'sampledb'), VOLUME_CAPACITY
                                     | (default: '1Gi')
      -----------------              | -----------------
      Optional Params                | MONGODB_ADMIN_PASSWORD,
                                     | NAMESPACE, MONGODB_PASSWORD,
                                     | MONGODB_USER
    ```
1.  Pass the required parameters as flags and wait for the deployment of the database:
    ```terminal
    $ odo service create mongodb-persistent --plan default --wait -p DATABASE_SERVICE_NAME=mongodb -p MEMORY_LIMIT=512Mi -p MONGODB_DATABASE=sampledb -p VOLUME_CAPACITY=1Gi
    ```