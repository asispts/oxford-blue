<?php declare(strict_types=1);

namespace App\Service;

use App\Util\AbstractClass;
use App\Util\InterfaceA;
use App\Util\InterfaceB;
use App\Util\UnusedImport; // support.class
use PDO; // support.class.builtin
use stdClass;

// storage.modifier
// storage.type
// meta.class
// entity.other.inherited-class
final class ClassName extends AbstractClass implements InterfaceA, InterfaceB
{
    private $unusedProperty;

    /**
     * Database connection
     *
     * @var PDO
     */
    private $pdo;

    // support.function.constructor
    public function __construct()
    {
        $this->pdo = new PDO($GLOBALS['db_dsn'], $GLOBALS['db_username'], $GLOBALS['db_password']);
    }

    public function getConnection(): ?PDO
    {
        // keyword.operator.class
        // variable.other.property
        return $this->pdo;
    }

    // entity.name.function
    public function methodName(array $params): ?string
    {
        // support.function
        if (empty($param) === false && is_object($params)) return array_unique(['test', ...$params]);

        // variable.other.property
        // meta.method-call
        $this->pdo->beginTransaction();

        // keyword.operator
        // keyword.operator.assignment
        // punctuation
        $price = 0;
        for($i = 0; $i <= 100; $i++)
        {
            $price = $price * $price * 5 / 10;
        }
    }
}
