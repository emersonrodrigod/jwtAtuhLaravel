<?php

use App\User;
use Illuminate\Database\Seeder;

class CriaUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Emerson',
            'email' => 'emersonrodrigod@gmail.com',
            'password' => bcrypt('123456')
        ]);
    }
}
